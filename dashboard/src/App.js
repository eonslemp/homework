import './App.css';
import SideBar from './components/sideBar';
import Reviews from './components/reviews';
import SentimentAnalysis from './components/sentimentAnalysis';
import AverageRating from './components/averageRating';
import WebsiteVisitors from './components/visitors'

function App() {
  return (
    <div class="App">
      <div id='side-bar'>
        <SideBar/>
      </div>
      <div id='main'>
        <div id='top'>
          <Reviews/>
          <AverageRating/>
          <SentimentAnalysis/>
        </div>
        <div id='visitors-graph'>
          <WebsiteVisitors/>
        </div>
      </div>
    </div>
  );
}

export default App;
