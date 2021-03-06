const clockMaker = (type = 'minute') => {

  const items = [];
  const timeVal = (type === 'minute') ? 60 : 12;
  const timeStep = (type === 'minute') ? 5 : 1;
  const timeStart = (type === 'minute') ? 0 : 1;

  const r = 124;
  const j = r - 25;

  for (let min = timeStart; min <= timeVal; min += timeStep) {
    if (min !== 60) {
      const str = String (min);
      const x = j * Math.sin(Math.PI * 2 * (min / timeVal));
      const y = j * Math.cos(Math.PI * 2 * (min / timeVal));

      items.push({
        time: str,
        left: (x + r - 17),
        top: (-y + r - 17),
        type
      });
    }
  }
  return items;
}

module.exports = {
  clockMaker
};
