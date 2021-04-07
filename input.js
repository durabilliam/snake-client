const setupInput = function(){
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', (key) => {
    handleUserInput();
  });
  return stdin;
}
module.exports = setupInput;

const handleUserInput = function(){
  if (key === '\u0003'){
    process.exit();
  }
};