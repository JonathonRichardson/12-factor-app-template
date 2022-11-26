## Tasks

### Run Jest Tests

Right now, I don't have the TS tests working directly, so I need to run them indirectly by compiling the JS first, and then executing the compiled typescript.

This is annoying, and I don't plan to make this required in the future.

First, run webpack from the `www` directory:

```
cd services/www
yarn run webpack
```

This will create files like `lib/ts/packages/config/src/utils.spec.js`.

We can then run the following from **the root of the repository**:

```
yarn run jest **/*.spec.js
```