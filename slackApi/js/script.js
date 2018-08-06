key: 'xoxp-296524535633-314747759702-409306137856-c340a48acec79a85a1a1b224b4868c47'




$.ajax({
  url: url,
  dataType: 'JSON',
  method: 'GET',
}).done(function(result) {
  console.log(result);
}).fail(function(err) {
  throw err;
});
