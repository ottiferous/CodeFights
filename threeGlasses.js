function threeGlasses(cap) {
    var max = cap[0] + cap[1] + cap[2];
    cap.sort(function(a,b) {return a-b});
    var c = cap[0];
    var b = cap[1];
    var a = cap[2];
    
    function decrementBy(total, x) {
        var result = [];
        var count = Math.floor(total/x);
        for (var i = 0; i <= count; i++) {
            result.push(total);
            total -= x;
        }
        return result
    }
      
    // need to perform a,b,c,a-b,a-c,b-c, then add in a,b,c
    z = decrementBy(max,a);
    y = decrementBy(max,b);
    x = decrementBy(max,c);
    w = decrementBy(max,a-b);
    v = decrementBy(max,a-c);
    u = decrementBy(max,b-c);
    
    var filterList = [];
    filterList = filterList.concat(u,v,w,x,y,z,[a],[b],[c],[0],[max]);
    var unique = filterList.filter(function(elem, index, self) {
        return index == self.indexOf(elem);
    });
                                   
    return unique;
        
}
