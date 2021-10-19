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

function hsb(hue, sat, bri, alp = 1){ 
   var l;
   var s;
   
   if (bri == 0){
    return "hsla(0, 0%, 0%, "+alp+")"; 
   }  
   else {
      l = (bri/2) * (2 - (sat/100));
      s =  (bri * s) / (l < 50)? (l * 2) : ((200 - l) * 2)
   }
    return "hsl("+hue+","+s+"%,"+l+"%)";
 }
   
 
 
 $(document).ready(function(){
    getQuotes();
 
  });
   
 
 let quoteArray;
 
 const url = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
 
 function getQuotes(){
     fetch(url).then((response)=>{
       response.json().then((json)=>{
         quoteArray = json.quotes;
         console.log('quotesData');
         console.log(quoteArray.length);
         console.log(quoteArray);
       })
     })
 }
 //redux
 
 const NEW = 'NEW';
 
 
 const nQuote = (quote)=>{
   return {
     type: 'NEW',
     quote: quote //supposed to be the quote object
   }
 }
 
 const quoteReducer = (state={ quote : 'Random Quote Machine',
       author : 'A project by Efe'}, action) => {
   switch(action.type){
     case NEW:
       return {
         quote: action.quote.quote,
         author: action.quote.author
       }
       break;
       
     default:
        return state;
   }
 };
 
 const store = Redux.createStore(quoteReducer);
 
 //React
 
 class QuoteComponent extends React.Component {
   constructor(props) {
     super(props);
 
     this.newQuote = this.newQuote.bind(this);
   }
   
   newQuote(){
     //call newQuote from props. newQuote is found //in props thanks to mapDispatchToProps. Pass in //quoteArray gotten from the remote server earlier.
     var h = Math.floor(Math.random()*360);
     var s = Math.floor(Math.random()+10);
     var b = Math.floor((Math.random()*20)+30);
     
     this.props.newQuote(quoteArray);
     $("#quote-box").css("background-color", hsb(h,s,b));
     $("body").css("background-color", hsb(h,s,b+40));
      $("#tweet-quote").css("color", hsb(h,s,b+40));
     // document.getElementById("quote-box").style.backgroundColor = hsb(16,10,Math.floor(Math.random()*100));
     //calculate the random number within the array and use that as the index to fetch
   }
   
   render() {
     return (
       <div id="quote-box">
         <h3 id="text">{this.props.quoteObj.quote}</h3>
         <h4 id="author">{this.props.quoteObj.author}</h4>
         <button id="new-quote" onClick={this.newQuote}>new quote</button>
         <a  id="tweet-quote" href={"https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="+this.props.quoteObj.quote+"-"+this.props.quoteObj.author} target="_top"><h4>tweet quote</h4></a>
       </div>
     );
   }
 };
 
 //reactredux
 
 const mapStateToProps = (state)=>({
   quoteObj: state
 })
 
 const mapDispatchToProps = (dispatch) =>({
   newQuote: (quoteArray)=>{
     dispatch(nQuote(quoteArray[ Math.floor(Math.random() * quoteArray.length)]));
   }
 })
 
 const Provider = ReactRedux.Provider;
 const connect = ReactRedux.connect;
 
 const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(QuoteComponent)
 
 class AppWrapper extends React.Component {
   // Render the Provider below this line
   render() {
       return (
         <Provider store={store}>
           <ConnectedComponent/>
         </Provider>
       );
     }
 
   // Change code above this line
 };
 
 
 
 ReactDOM.render(<AppWrapper/>,document.querySelector('#comp'));
 
 //react is working perfectly. next, move state to redux and connect both reactredux.