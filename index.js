// Code your solution in this file!
function distanceFromHqInBlocks(Blocks){
    if(Blocks>42){
        return Blocks-42;
    }else if(Blocks<42){
        return 42-Blocks;
    }else{
        return 0;
    }

}
function distanceFromHqInFeet(Blocks){
    return distanceFromHqInBlocks(Blocks)*264;
}
function distanceTravelledInFeet(start,end){
    return Math.abs(start*264-end*264);
}
function calculatesFarePrice(start,destination){
    const totalDistanceTravelled=Math.abs(start*264-destination*264);
    if(totalDistanceTravelled<400){
        return 0;
    }else if(totalDistanceTravelled<2000){
        return 2.56;
    }else if(totalDistanceTravelled<2500){
        return 25;
    }else{
        return "cannot travel that far";
    }
}