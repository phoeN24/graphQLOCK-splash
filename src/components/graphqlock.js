import React from 'react';

const AboutGL = () => {
  return (
    <div id="about">
      <p>
       GraphQLOCK is a server-side NPM middleware library package that provides authentication and authorization for Express GraphQL
       servers based on user defined roles and operations, whilst allowing full access and control to security data.
       
      </p>
      <p> 
        GraphQLOCK also provides a backbone MongoDB model for the client to persist refresh tokens for continual authorization
        and authentication with frictionless step up through the use of env file and environment variables.
      </p>
    </div>
  )
}

export default AboutGL;