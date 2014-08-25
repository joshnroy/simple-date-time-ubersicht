command: "echo Hello World!",

refreshFrequency: 1000,

render: function (output) {
  return "<div><h1>" + output + "</h1></div>";
},
 
style: "        \n\
  top: 20px     \n\
  left: 20px    \n\
                \n\
  h1            \n\
    color: #fff \n\
"