command: 'date +"%T Hello"',

refreshFrequency: 1000,

render: function (output) {
  return "<div><h1>" + output + "</h1></div>";
},
 
style: "        \n\
  top: 500px     \n\
  left: 960px    \n\
                \n\
  h1            \n\
    color: #fff \n\
"