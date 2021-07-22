import * as AWS from "aws-sdk";
AWS.config.update({ region: "us-east-1" });

/**
 * @name operationsDB
 * @description This is the generic class for any CRUD operation in any class/model
 */
class OperationsDB {
  /**
   * @name addElement
   * @description this is a method for insert a register in the database
   * @param tableName this is the name of the database
   * @param element this is the element to insert
   * @returns {Object}
   */
  
  public async addElement(tableName: string, element: any): Promise<any> {
    const docClient = new AWS.DynamoDB.DocumentClient({
      apiVersion: "2012-08-10",
      convertEmptyValues: true,
    });
    const params = {
      TableName: tableName,
      Item: element,
      ReturnValues: "ALL_OLD",
    };
    let data: any;
    data = await docClient.put(params).promise();
    return data;
  }

  /**
   * @name getElement
   * @description method for get a a element from the database
   * @param tableName this is the name of the table
   * @param id this is the object id to search
   * @returns {Object}
   */
 
  public async getElement<T>(
    tableName: string,
    id: string | undefined
  ): Promise<T> {
    const docClient = new AWS.DynamoDB.DocumentClient({
      apiVersion: "2012-08-10",
      convertEmptyValues: true,
    });
    const params = {
      TableName: tableName,
      Key: { id: id },
    };
    const data = await docClient.get(params).promise();
    return data.Item as T;
  }

  /**
   * @name getAllElements
   * @description method for get all the elements from the database
   * @param tableName this is the name of the table
   * @returns {Object}
   */
   public async getAllElements(tableName: string) {
    var documentClient = new AWS.DynamoDB.DocumentClient();
    var params = {
      TableName: tableName,
    };
    let data = await documentClient.scan(params).promise();
    return data.Items;
  }

  /**
   * @name deleteElement
   * @description Method for delete a register from the database
   * @param tableName this is the name of the table
   * @param id this is the object id to delete
   * @returns {Object}
   */
  public async deleteElement(tableName: string, id: any) {
    const docClient = new AWS.DynamoDB.DocumentClient({
      apiVersion: "2012-08-10",
      convertEmptyValues: true,
    });
    const params = {
      TableName: tableName,
      Key: { id: id },
    };

    let data: any;

    data = await docClient.delete(params).promise();
    return data;
  }

  

  /**
   * @name updateElement
   * @description method for update an element from the database
   * @param body the element to be modificated
   * @param tableName this is the name of the table
   * @returns {Object}
   */
  public async updateElement(body: any, tableName: string) {
    let expresionsNames: any = {};
    let expresionsValues: any = {};
    let exp = {
      UpdateExpression: "set",
      ExpressionAttributeNames: expresionsNames,
      ExpressionAttributeValues: expresionsValues,
    };
    Object.entries(body).forEach(([key, item]) => {
      if (key != "id") {
        exp.UpdateExpression += ` #${key} = :${key},`;
        exp.ExpressionAttributeNames["#" + key] = key;
        exp.ExpressionAttributeValues[`:${key}`] = item;
      }
    });
    exp.UpdateExpression = exp.UpdateExpression.slice(0, -1);

    var documentClient = new AWS.DynamoDB.DocumentClient();
    var params = {
      TableName: tableName,
      KeyConditionExpression: "id = :id",
      ExpressionAttributeValues: {
        ":id": body.id,
      },
    };
    let data = await documentClient.query(params).promise();
    if (data && data.Items) {
      for (const result of data.Items) {
        let updateParams = {
          TableName: tableName,
          Key: { id: result.id },
          ...exp,
        };
        await documentClient.update(updateParams).promise();
      }
    }
  }
}

const operationDB = new OperationsDB();
export default operationDB;
