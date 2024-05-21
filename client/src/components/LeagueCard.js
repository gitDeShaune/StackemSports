const LeagueCard = ({league) => {
  /*const {
    _id,
    name,
	lfg_dates,
	lfg_opps,
	lfg_stats,
	prop_title,
    
  } = userData; //the stuff has to be named exactly like in the json ; need better names maybe
  */
	
  var max = 0;
  var min = 500;
  var avg = 0;
  
  let graph_data =[]
	
  graph_data = fill_GRAPHDATA(lfg_stats,lfg_dates)
  
  //avg = find_AVG(lfg_stats);//does this work; no becasue avg for the bar chart would need to be defined before the function 
  
  //removed from first first div  style={CardStyle}
  return (
    <ReactCardFlip
      className="playerCard"
      isFlipped={isFlipped}
      flipDirection="horizontal"
    >
      <div
       
        onClick={() => setIsFlipped((prev) => !prev)}
        className="CardFront quick-stats stat-box"
      >
	  
	    
        
		<div class="card-frame"></div>
		<div class="inner-card-frame front-face">
			<div class="stat-player-name-box">
						<div class = "player-name"><strong>{name}</strong></div>							
			</div>
		</div>
		
		
		
		
		<div class = "stat-square-div">
			<div class = "stat-square ss-hi" >
						<div class = "ss-stat">{find_MAX(lfg_stats)}</div>
						<div class="ss-title">HI </div>
						
				</div>
				
				<div class = "stat-square ss-avg">
						<div class = "ss-stat">{find_AVG(lfg_stats)}</div>
						<div class="ss-title">AVG </div>
						
				</div>	
				
				
				<div class = "stat-square ss-lo" >
						<div class = "ss-stat">{find_MIN(lfg_stats)}</div>
						<div class="ss-title">LO </div>
						
				</div>
		
		</div>
		
		
		
      </div>
      <div
        
        onClick={() => setIsFlipped((prev) => !prev)}
        className="CardBack"
      >
        {/* This is the back of the card. */}
        <div
          style={{
            height: "100%",
            flexDirection: "column",
            alignContent: "space-between"
          }}
		  class = "stat-box quick-stats"
        >
		
		<div class="card-frame"></div>
		
		{/*<div class="corner-circle"></div> is supposed to hold logo, but keep out of back for now because it makes back bigger when flipped*/}
		
		
		
          {/* <div className="cardTitle">{name}</div>
          <div className="cardLabel">Power move</div>
          <div className="cardValue">{powerMove}</div>
          <ReactStars
            count={5}
            // onChange={ratingChanged}
            size={24}
            activeColor="#ffd700"
            isHalf={true}
            edit={false}
            value={(Math.random() * 2) + 3}
          /> */}
          
    </ReactCardFlip>
  );
};

export default PlayerCard;