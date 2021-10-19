"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

// !! IMPORTANT README:
// You may add additional external JS and CSS as needed to complete the project, however the current external resource MUST remain in place for the tests to work. BABEL must also be left in place 

/***********
INSTRUCTIONS:
  - Select the project you would 
    like to complete from the dropdown 
    menu.
  - Click the "RUN TESTS" button to
    run the tests against the blank 
    pen.
  - Click the "TESTS" button to see 
    the individual test cases. 
    (should all be failing at first)
  - Start coding! As you fulfill each
    test case, you will see them go   
    from red to green.
  - As you start to build out your 
    project, when tests are failing, 
    you should get helpful errors 
    along the way!
    ************/
// PLEASE NOTE: Adding global style rules using the * selector, or by adding rules to body {..} or html {..}, or to all elements within body or html, i.e. h1 {..}, has the potential to pollute the test suite's CSS. Try adding: * { color: red }, for a quick example!
// Once you have read the above messages, you can delete all comments.
//jquery
// $(document).ready(function(){
//   $("div").css("color","red");
// })
// // Redux:
// const ADD = 'ADD';
// const addMessage = (message) => {
//   return {
//     type: ADD,
//     message
//   }
// };
// const messageReducer = (state = [], action) => {
//   switch (action.type) {
//     case ADD:
//       return [
//         ...state,
//         action.message
//       ];
//     default:
//       return state;
//   }
// };
// const store = Redux.createStore(messageReducer);
// // React:
// class DisplayMessages extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       input: '',
//       messages: []
//     }
//     this.handleChange = this.handleChange.bind(this);
//     this.submitMessage = this.submitMessage.bind(this);
//   }
//   handleChange(event) {
//     this.setState({
//       input: event.target.value
//     });
//   }
//   submitMessage() {  
//     this.setState((state) => {
//       const currentMessage = state.input;
//       return {
//         input: '',
//         messages: state.messages.concat(currentMessage)
//       };
//     });
//   }
//   render() {
//     return (
//       <div>
//         <h2>Type in a new Message:</h2>
//         <input
//           value={this.state.input}
//           onChange={this.handleChange}/><br/>
//         <button onClick={this.submitMessage}>Submit</button>
//         <ul>
//           {this.state.messages.map( (message, idx) => {
//               return (
//                  <li key={idx}>{message}</li>
//               )
//             })
//           }
//         </ul>
//       </div>
//     );
//   }
// };
// const Provider = ReactRedux.Provider;
// class AppWrapper extends React.Component {
//   // Render the Provider below this line
//    render(){
//     return (
//       <Provider store={store}>
//         <DisplayMessages/>
//       </Provider>
//     )
//   }
//   // Change code above this line
// };
// const domContainer = document.getElementById('root');
// ReactDOM.render(<AppWrapper/>, domContainer);
//js jquery
function hsb(hue, sat, bri) {
  var alp = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
  var l;
  var s;

  if (bri == 0) {
    return "hsla(0, 0%, 0%, " + alp + ")";
  } else {
    l = bri / 2 * (2 - sat / 100);
    s = bri * s / (l < 50) ? l * 2 : (200 - l) * 2;
  }

  return "hsl(" + hue + "," + s + "%," + l + "%)";
}

$(document).ready(function () {
  getQuotes();
});
var quoteArray;
var url = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';

function getQuotes() {
  fetch(url).then(function (response) {
    response.json().then(function (json) {
      quoteArray = json.quotes;
      console.log('quotesData');
      console.log(quoteArray.length);
      console.log(quoteArray);
    });
  });
} //redux


var NEW = 'NEW';

var nQuote = function nQuote(quote) {
  return {
    type: 'NEW',
    quote: quote //supposed to be the quote object

  };
};

var quoteReducer = function quoteReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    quote: 'Random Quote Machine',
    author: 'A project by Efe'
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case NEW:
      return {
        quote: action.quote.quote,
        author: action.quote.author
      };
      break;

    default:
      return state;
  }
};

var store = Redux.createStore(quoteReducer); //React

var QuoteComponent = /*#__PURE__*/function (_React$Component) {
  _inherits(QuoteComponent, _React$Component);

  var _super = _createSuper(QuoteComponent);

  function QuoteComponent(props) {
    var _this;

    _classCallCheck(this, QuoteComponent);

    _this = _super.call(this, props);
    _this.newQuote = _this.newQuote.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(QuoteComponent, [{
    key: "newQuote",
    value: function newQuote() {
      //call newQuote from props. newQuote is found //in props thanks to mapDispatchToProps. Pass in //quoteArray gotten from the remote server earlier.
      var h = Math.floor(Math.random() * 360);
      var s = Math.floor(Math.random() + 10);
      var b = Math.floor(Math.random() * 20 + 30);
      this.props.newQuote(quoteArray);
      $("#quote-box").css("background-color", hsb(h, s, b));
      $("body").css("background-color", hsb(h, s, b + 40));
      $("#tweet-quote").css("color", hsb(h, s, b + 40)); // document.getElementById("quote-box").style.backgroundColor = hsb(16,10,Math.floor(Math.random()*100));
      //calculate the random number within the array and use that as the index to fetch
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", {
        id: "quote-box"
      }, /*#__PURE__*/React.createElement("h3", {
        id: "text"
      }, this.props.quoteObj.quote), /*#__PURE__*/React.createElement("h4", {
        id: "author"
      }, this.props.quoteObj.author), /*#__PURE__*/React.createElement("button", {
        id: "new-quote",
        onClick: this.newQuote
      }, "new quote"), /*#__PURE__*/React.createElement("a", {
        id: "tweet-quote",
        href: "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" + this.props.quoteObj.quote + "-" + this.props.quoteObj.author,
        target: "_top"
      }, /*#__PURE__*/React.createElement("h4", null, "tweet quote")));
    }
  }]);

  return QuoteComponent;
}(React.Component);

; //reactredux

var mapStateToProps = function mapStateToProps(state) {
  return {
    quoteObj: state
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    newQuote: function newQuote(quoteArray) {
      dispatch(nQuote(quoteArray[Math.floor(Math.random() * quoteArray.length)]));
    }
  };
};

var Provider = ReactRedux.Provider;
var connect = ReactRedux.connect;
var ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(QuoteComponent);

var AppWrapper = /*#__PURE__*/function (_React$Component2) {
  _inherits(AppWrapper, _React$Component2);

  var _super2 = _createSuper(AppWrapper);

  function AppWrapper() {
    _classCallCheck(this, AppWrapper);

    return _super2.apply(this, arguments);
  }

  _createClass(AppWrapper, [{
    key: "render",
    value: // Render the Provider below this line
    function render() {
      return /*#__PURE__*/React.createElement(Provider, {
        store: store
      }, /*#__PURE__*/React.createElement(ConnectedComponent, null));
    } // Change code above this line

  }]);

  return AppWrapper;
}(React.Component);

;
ReactDOM.render( /*#__PURE__*/React.createElement(AppWrapper, null), document.querySelector('#comp')); //react is working perfectly. next, move state to redux and connect both reactredux.
