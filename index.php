<!DOCTYPE html>
<html>

<head>
  <title>App Lettres</title>
  <link rel="stylesheet" href="style/normalize.css">
 
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/milligram@1.4.1/dist/milligram.min.css">
  <link rel="stylesheet" href="style/style.css">

</head>

<body>
  <section class="full-height">
    <div class="container-fluid">
      <div class="row h-100">
        <div class="col-6">
          <div class="text-center">
            <h1 class="titre text-center">CAGED Exercice</h1>
            <div class="vertical-center">
              <div class="column">
                <label class="form-label" for="tempo">Tempo:</label>
                <div class="control">
                  <input class="form-control" type="number" id="tempo" min="1" value="100">
                </div>
              </div>
              <div class="column">
                <label class="form-label" for="timePerMeasure">Temps par mesure (ms):</label>
                <div class="control">
                  <input class="form-control" type="number" id="timePerMeasure" min="1" value="4">
                </div>
              </div>
              <div class="column">
                <label class="form-label" for="measures">Nombre de mesures:</label>
                <div class="control">
                  <input class="form-control" type="number" id="measures" min="1" value="1">
                </div>
              </div>
            </div>
            <div class="btn-group">
              <div class="control">
                <button class="btn btn-primary" id="playStopButton">Play</button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-6">
          <div class="text-center">
            <div id="letter" class="text-center"></div>
            <div class="image-container">
              <img id="image" src="" alt="Letter Image">
            </div>
          </div>
        </div>
      </div>

    </div>
    </div>
  </section>
  <script src="js/script.js"></script>
</body>

</html>