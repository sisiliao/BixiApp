# Bixi Project

This web application is built with react and nodejs. It can lists all the stations in grid, and displays stations in a map.

<div>
    <img src="/docs/BixiStationsGrid.png" width="360" height="240">
    <img src="/docs/BixiStationsMap.png" width="360" height="240">
</div>

## Run Bixi project in development mode

You can either run it with script `run.sh` or run with npm, detailed instructions below.

### Run with script

```
chmod +x run.sh
./run.sh
```

### Run with npm

##### Run Backend service in `bixi-project/server` :

```
cd server
npm install
npm start
```

##### Run Frontend service in `bixi-project/frontend`:

```
cd frontend
npm install
npm start
```

##### Open browser and visit http://localhost:3000
