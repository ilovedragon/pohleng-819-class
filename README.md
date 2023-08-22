# pohleng-819-class

The GitHub Actions pipeline described fulfills the following requirements:

1. **Node.js Application with Automatic Testing Set Up**:
   - The pipeline includes a job named "unit-testing" that runs automatic tests for the Node.js application using the `npm test` command. This step ensures that automatic testing is set up for the application.

2. **Code Repository with the CI/CD Pipeline Configured**:
   - The entire pipeline is configured to run whenever code changes are pushed to the main branch or any other branch. This satisfies the CI (Continuous Integration) part of CI/CD, as it automates the process of integrating code changes into the application.
   - The final job, named "deploy," is responsible for deploying the application, which aligns with the CD (Continuous Deployment) part of CI/CD. It indicates that a deployment pipeline is in place.

3. **Package Vulnerability Scan on Your CI/CD in Place**:
   - The pipeline includes a job named "package-scanning" that runs a package vulnerability scan using the `npm audit` command. This step checks for known security vulnerabilities in the application's dependencies. It ensures that a package vulnerability scan is integrated into the CI/CD process, helping to maintain the security of the application.

In summary, the GitHub Actions pipeline is having a Node.js application with automatic testing, a code repository with a CI/CD pipeline configured, and a package vulnerability scan integrated into the CI/CD process. It effectively automates testing and deployment while also addressing security concerns through vulnerability scanning.


Here are the steps explaining the steps taken to set up this Continuous Integration and Continuous Deployment (CICD) pipeline.:

1. **Trigger Condition**:
   - This pipeline is triggered on the `push` event to the `main` branch or any other branch ("*"). This means that whenever code is pushed to the repository's main branch or any other branch, this pipeline will be initiated.

2. **pre-deploy**:
   - This job runs on an `ubuntu-latest` runner.
   - It simply prints a message indicating that the job was triggered by a specific event (e.g., push).

3. **install-dependencies**:
   - This job also runs on an `ubuntu-latest` runner.
   - It depends on the `pre-deploy` job, meaning it will only run if the `pre-deploy` job completes successfully.
   - It checks out the code from the repository using the `actions/checkout` action.
   - Then, it runs the `npm install` command to install project dependencies.

4. **unit-testing**:
   - This job runs on an `ubuntu-latest` runner.
   - It depends on the `install-dependencies` job, ensuring that dependencies are installed before proceeding.
   - Similar to the previous step, it checks out the code and installs dependencies.
   - It then runs unit tests using `npm test`.

5. **package-scanning**:
   - This job runs on an `ubuntu-latest` runner.
   - It depends on the `unit-testing` job, ensuring that unit tests are run before proceeding.
   - Again, it checks out the code and installs dependencies.
   - This step includes running an audit of the project using `npm audit`.

6. **deploy**:
   - This job is named "deploy" and runs on an `ubuntu-latest` runner.
   - It depends on the `package-scanning` job, making sure that the package scanning step is successful before deploying.
   - It checks out the code again.
   - Sets up the Node.js environment using the specified version.
   - Uses `npm ci` to install project dependencies with the `npm ci` command, which is typically used for installing dependencies from a `package-lock.json` file.
   - Finally, it deploys the Serverless application using the Serverless Framework GitHub Action, passing in AWS access and secret keys from GitHub secrets.

This pipeline is structured to ensure that each step depends on the successful completion of the previous step, making sure that code is tested and scanned before deployment. It's a common setup for a CICD pipeline for serverless applications. 

