const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map((journey) => {
    return journey.startLocation;
  });
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map((journey) => {
    return journey.endLocation;
  })
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter((journey) => {
    return journey.transport === transport;
  });
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter((journey) => {
    return journey.distance > minDistance;
  })
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce((previousValue, currentValue) => {
    return previousValue + currentValue.distance
  }, 0)  
};

// Can't get this!! 
Traveller.prototype.getUniqueModesOfTransport = function () {
  let modesOfTransport = []
  return this.journeys.map((journey) => {
    return modesOfTransport.filter((onlyUnique) => {
    return onlyUnique
  });
  });
}

module.exports = Traveller;
