class Random{constructor(e){this.seed=e,this.originalSeed=e}randDec(){return this.seed^=this.seed<<13,this.seed^=this.seed>>17,this.seed^=this.seed<<5,(this.seed<0?1+~this.seed:this.seed)%1e3/1e3}randNum(e,s){return e+(s-e)*this.randDec()}randInt(e,s){return Math.floor(this.randNum(e,s+1))}reset(){this.seed=this.originalSeed}}var sww=700,shh=840;let canvas;const st_deviation=50,layers=80;var left_x,right_x,top_y,bottom_y,resolution,num_columns,num_rows,grid,offset;let img,easing=.05;var imgList=[image1+image12,image2+image22+image23,image3+image32+image33,image4+image42,image5+image52];const num_steps=200,step_length=5;let angoff=0,shapecolors=[],pentagons=[],x1=[],y1=[],x2=[],y2=[];var pp=[[300,-300],[300,-100],[300,100],[300,300],[300,500]];let tokenData={hash:random_hash(),tokenId:"123000456"};const defaultSize=1e3,ratio=.83;let hh=shh,ww=sww,dim=Math.min(ww,hh),M=dim/1e3;console.log(`M: ${M}`),console.log(`Hash: ${tokenData.hash}`);const seed=parseInt(tokenData.hash.slice(0,16),16);console.log(`Seed: ${seed}`);const R=new Random(seed);function random_hash(){let e="0123456789abcdef",s="0x";for(let t=64;t>0;--t)s+=e[Math.floor(Math.random()*e.length)];return s}