import { config as configProject } from '../../package.json';

export const DBConfigurations = {
  superheroesTable: configProject.STACK_DB_NAME  + "-superheroes-table",
};

export const BucketConfigurations = {
  nameBucket: configProject.QRVEY_BUCKET_NAME
}

export const ExtensionFiles = {
  CSV:"csv",
  PDF:"pdf"
}

export const Headers = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Credentials": true,
  "Access-Control-Allow-Headers":
    "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
};

export const STATUS_DESCRIPTION = {
    SUCCESS:"SUCCESS",
    ERROR: "ERROR"
}

export const CODES = {
  SUCCESS: 200,
  CLIENT_ERROR: 400,
  SERVER_ERROR: 500
}

export const Errors = {
  NOT_EXIST_ESTENSION:"EXTENSION IS INVALID OR DOES NOT EXISTS"
}