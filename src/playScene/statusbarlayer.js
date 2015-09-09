/**
 * Created by neil.zhou on 2015/9/9.
 */
var statusbarLayer = cc.Layer.extend({
    labelCoin:null,
    labelMeter:null,
    ctor:function(){
        this._super();
        this.init();
    },

    init:function(){
        var size = cc.winSize;

        this.labelCoin = new cc.LabelTTF("Coins:0","Helvetica",20);
        this.labelCoin.setColor(cc.color(0,0,0));
        this.labelCoin.attr({x:40,y:size.height-30,anchorX:0,anchorY:0});
        this.addChild(this.labelCoin);

        this.labelMeter = new cc.LabelTTF("0M","Helvetica",20);
        this.labelMeter.setColor(cc.color(0,0,0));
        this.labelMeter.attr({x:size.width-70,y:size.height-30,anchorX:0,anchorY:0});
        this.addChild(this.labelMeter);

    }
});