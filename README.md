# _nodejs_gae

This repo demonstrates how to run and host a Nodejs app on Google App Engine.

## Technologies

1. Nodejs
1. NPM
1. JavaScript
1. mLab
1. MongoDB
1. Google App Engine


## Run Locally

1.  Clone this repo:

        git clone https://github.com/philipszdavido/_nodejs_gae.git

1.  Move into the `_nodejs_gae` directory from the terminal:

        cd _nodejs_gae

1.  Install depedencies using `npm` or `yarn`:

        npm install

    or

        yarn install

1.  Run the sample with `npm` or `yarn`:

        npm start

    or

        yarn start

1.  Visit the application at `http://localhost:1000/api/v1`.

## Deploying to Google App Engine

1.  Use the [Google Cloud Console][console] to create a Google Cloud Platform
    project.
1.  [Enable billing][billing] for your project.

1.  Clone this repo:

        git clone https://github.com/philipszdavido/_nodejs_gae.git

1.  Move into the `_nodejs_gae` directory from the terminal:

        cd _nodejs_gae

1.  Install depedencies using `npm` or `yarn`:

        npm install

    or

        yarn install

1.  Use the Cloud SDK to deploy:

        gcloud app deploy

1.  View your deployed application at `https://<YOUR_PROJECT_ID>.appspot.com` or `gcloud app browse`.

#### API endpoint

1. **Character** - This resource is about the Black Panther characters.

    * POST - /blackpanther/  Creates a new Black Panther instance.
    * GET - /blackpanthers/  Returns all Black Panther characters.
    * GET - /blackpanther/`<id>`  Returns the specified Black Panther character id.
    * PUT - /blackpanther/`<id>`  Update a Black Panther character attributes.
    * DELETE - /blackpanther/`<id>`  Delete a Black Panther character.

#### **Black Panther** Character Model Structure

```json
{
    "alias": String,
    "occupation": String,
    "gender": String,
    "place_of_birth": String,
    "abilities": String,
    "played_by": String,
    "image_path": String
}
```

###### Black Panther POST Test - This creates a new Black Panther character

```sh
curl --request POST \
  --url http://localhost:1000/api/v1/blackpanther \
  --header 'content-type: application/json' \
  --data '{"alias":"tchalla","occupation":"King of Wakanda","gender":"male","place_of_birth":"Wakanda","abilities":"enhanced strength","played_by":"Chadwick Boseman"}'
```

[nodejs]: https://nodejs.org/
[appengine]: https://cloud.google.com/appengine/docs/flexible/nodejs/
[nodejs_dev]: https://cloud.google.com/community/tutorials/how-to-prepare-a-nodejs-dev-environment
[sdk]: https://cloud.google.com/sdk/
[console]: https://console.cloud.google.com
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[official_samples]: https://github.com/GoogleCloudPlatform/nodejs-docs-samples/tree/master/appengine
[community_samples]: https://cloud.google.com/community/tutorials/?q=%22Node.js%22
