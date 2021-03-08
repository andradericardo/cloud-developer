export const config = {
  "dev": {
    "username": "udagramandradedev",
    "password": "!777China!",
    "database": "udagramandradedev",
    "host": "udagramandradedev.chy7jmmyaiy8.sa-east-1.rds.amazonaws.com",
    "dialect": "postgres",
    "aws_region": "sa-east-1",
    "aws_profile": "default",
    "aws_media_bucket": "udagram-andrade-dev",
    "jwt_secret": "helloworld"

    // with environment variables
    // "username": process.env.POSTGRESS_USERNAME, //set an environment variable with export $POSTGRESS_USERNAME=xxx
    // "password": process.env.POSTGRESS_PASSWORD,
    // "database": process.env.POSTGRESS_DATABASE,
    // "host": process.env.POSTGRESS_HOST,
    // "dialect": process.env.POSTGRESS_DIALECT,
    // "aws_region": process.env.AWS_REGION,
    // "aws_profile": process.env.AWS_PROFILE,
    // "aws_media_bucket": process.env.AWS_MEDIA_BUCKET,
    // "jwt_secret": process.env.JWT_SECRET
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  },
  "jwt":{
    "secret": "helloworld"
  }
}
