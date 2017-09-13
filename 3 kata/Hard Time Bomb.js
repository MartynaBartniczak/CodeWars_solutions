var wireCode = global[Object.keys(global).filter(key => (typeof global[key] === 'number'))];
Bomb.CutTheWire(wireCode);