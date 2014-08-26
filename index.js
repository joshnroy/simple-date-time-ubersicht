command: 'date +"%r !! %A, %B %d !!!"',

refreshFrequency: 1000,

render: function (output) {
  return "<div> \
            <span> \
              <center> \
                <h1> \
                  " + output.substring(0, output.indexOf('!!')) + " \
                </h1> \
                <p> \
                  " + output.substring(output.indexOf('!!'), output.indexOf('!!!')).replace(/!!/g, '') + " \
                </p> \
              </center> \
            </span> \
          </div>";
          
},
 
style: "        \n\
  top: 150px     \n\
  left: 510px    \n\
                \n\
  h1            \n\
    font-size: 156px \n\
    margin-bottom: 0px \n\
    padding-bottom: 0px \n\
    color: #fff \n\
    \n\
  span \n\
    font-family: Open Sans \n\
    \n\
  p \n\
    font-size: 56px \n\
    margin-top: 0px \n\
    padding-top: 0px \n\
    color: #d9d9d9 \n\
"