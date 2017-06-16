Blockly.JavaScript['move_forward'] = function(block) {
  var code = 'move_forward();\n';
  return code;
};
Blockly.JavaScript['baldin_bidea'] = function(block) {
  var dropdown_aukerak = block.getFieldValue('aukerak');
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  // TODO: Assemble JavaScript into code variable.
  if(dropdown_aukerak=="F"){
    //bidea aurrean
    code="if (bidea_aurrean()){\n"+statements_name+"\n}";
  }else if(dropdown_aukerak=="R"){
    //bidea eskubian
    code="if (bidea_eskubian()){\n"+statements_name+"\n}";
  }else if(dropdown_aukerak=="L"){
    //Bidea ezkerrean
    code="if (bidea_ezkerrean()){\n"+statements_name+"\n}";
  }
  return code;
}
Blockly.JavaScript['errepikatu_helmuga_arte'] = function(block) {
  var text_helmuga = block.getFieldValue('helmuga');
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};
