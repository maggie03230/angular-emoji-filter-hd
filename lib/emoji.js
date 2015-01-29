(function () {

    "use strict";

    var emojis = [
        "大笑", "微笑", "高兴", "龇牙", "阴险", "心心眼", "啵一个", "脸红", "鬼嚎", "怒",
        "眨眼", "吐舌", "困", "呆", "斜眼", "尴尬", "面条泪", "笑cry", "叹气", "汗",
        "棒", "耶", "祈祷", "楼上", "鼓掌", "肌肉", "基友", "闺蜜", "闪电", "太阳",
        "猫咪", "狗狗", "猪鼻", "马", "南瓜", "鬼", "礼物", "贱笑", "钻石", "红中",
        "汉堡", "薯条", "拉面", "面包", "棒棒糖", "樱桃", "蛋糕", "冰激凌"
        ],
        rEmojis = new RegExp("\\[(" + emojis.join("|") + ")]", "g");

    var dic =  {
        "大笑": "laugh", "微笑": "smile", "高兴":"happy", "龇牙": "snag", "阴险": "snaky", "心心眼": "heart_eyes", "啵一个": "kiss", "脸红": "blush", "鬼嚎": "howl", "怒": "angry",
        "眨眼": "blink", "吐舌": "tongue", "困": "tired", "呆": "logy", "斜眼": "asquint", "尴尬": "embarassed", "面条泪": "cry", "笑cry": "laugh_cry", "叹气": "sigh", "汗": "sweat",
        "棒": "good", "耶": "yeah", "祈祷": "pray", "楼上": "finger", "鼓掌": "clap", "肌肉": "muscle", "基友": "bro", "闺蜜": "ladybro", "闪电": "flash", "太阳": "sun",
        "猫咪": "cat", "狗狗": "dog", "猪鼻": "hog_nose", "马": "horse", "南瓜": "plumpkin", "鬼": "ghost", "礼物": "present", "贱笑": "trollface", "钻石": "diamond", "红中":"mahjong",
        "汉堡": "hamburger", "薯条": "fries", "拉面":"ramen", "面包": "bread", "棒棒糖": "lollipop", "樱桃": "cherry", "蛋糕": "cake", "冰激凌": "icecream"
    };

    angular.module("maggie.emoji", []).filter("emoji", function () {
        return function (input) {
            if (input === undefined) return;
            if (typeof input === "object") return input;
            return input.replace(rEmojis, function (match, text) {
                return "<i class='emoji emoji_" + dic[text] + "' title=':" + dic[text]  + ":'></i>";
            });
        };
    });

}());
