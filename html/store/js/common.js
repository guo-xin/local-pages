// 删除购物车
function del(val) {
    var store = JSON.parse(localStorage.getItem('list'));

    store.splice(val, 1);

    localStorage.setItem('list', JSON.stringify(store));
    reflow();
};

// 减少购物车
function reduce(val) {

    var store = JSON.parse(localStorage.getItem('list'));

    var ls = store[val];
    if(ls['count'] >= 2) {
        ls['count'] = ls['count'] - 1;
    }
    localStorage.setItem('list', JSON.stringify(store));
    reflow();
};


// 添加购物车
function plus(val) {
    var store = JSON.parse(localStorage.getItem('list'));

    var ls = store[val];
    ls['count'] = ls['count'] + 1;

    localStorage.setItem('list', JSON.stringify(store));
    reflow();
};

// 初始化
function addStore() {
    var local = JSON.parse(localStorage.getItem('list'));
    if(local && local.length > 0) {
        return;
    }
    var val = [
        {
            name: 'Apple iPhone XR 移动联通电信4G手机 黑色 128G',
            id: 100,
            price: 5899,
            count: 1,
            check: true,
            desc: '黑色开放版',
            img: 'img/black.jpg'
        },
        {
            name: 'Apple iPhone XS Max (A2104) 64GB 金色',
            id: 101,
            price: 8289,
            count: 1,
            check: true,
            desc: '金色开放版',
            img: 'img/gold.jpg'
        }
    ];

    var content = JSON.stringify(val);
    localStorage.setItem('list',content);
};

// 购物车列表
function reflow() {
    var content = document.querySelector(".content");
    var local = JSON.parse(localStorage.getItem('list'));
    var tl = '';

    for(var i = 0; i < local.length; i ++ ) {
        tl = tl + '<div class="list"><div class="column t-checkbox"><div class="cart-checkbox">' +
            '<input type="checkbox" name="single" onchange="check(event,' + i + ')" class="jdcheckbox">' +
            '</div></div><div class="column t-goods"><img src=' + local[i]['img'] + ' alt=""><span>' +
            local[i]['name'] + '</span></div><div class="column t-props">' + local[i]['desc'] + '</div>' +
            '<div class="column t-price">' + local[i]['price'] + '</div><div class="column t-quantity"><span class="reduce" onclick="reduce(' + i + ')"> - </span>'
            + local[i]['count'] + '<span class="add" onclick="plus(' + i + ')"> + </span></div><div class="column t-sum">' +
            + (local[i]['count']) * local[i]['price'] + '</div> <div onclick="del(' + i + ')" class="column t-action remove">删除</div></div>';
    }
    content.innerHTML = tl;
    checkList();
    totalPrice();
};

// 结算信息
function totalPrice() {
    var list = document.querySelectorAll('input[name=single]');
    var local = JSON.parse(localStorage.getItem('list'));
    var count = 0,total = 0;
    for(var i = 0; i < list.length; i++) {
        if(list[i]['checked']) {
            count++;
            total += (local[i]['price']) * (local[i]['count']);
        }
    }
    var content = document.querySelector(".normal");

    var s = '<div class="comm-right"><div class="btn-area"><a href="javascript:void(0);" onclick="settle()" class="submit-btn" data-bind="1">去结算<b></b></a></div><div class="price-sum"><div><span class="txt txt-new">总价：</span>' +
        '<span class="price sumPrice"><em>¥' + total + '</em></span></div>' +
        '</div><div class="amount-sum">已选择<em>' + count + '</em>件商品</div></div>';

    content.innerHTML = s;
};

/**
 * @desc: 结算
 */
settle = () => {
    console.log(localStorage.getItem("list"), 4444, this);
};

// 全选功能
function checkAll(e) {
    var list = document.getElementsByTagName('input');
    var local = JSON.parse(localStorage.getItem('list'));

    var lists = document.querySelectorAll('input[name=single]');

    for(var i = 0; i < list.length; i++) {
        list[i]['checked'] = e.target.checked;
    }
    for(var j = 0; j < lists.length; j++) {
        local[j]['check'] = e.target.checked;
    }
    localStorage.setItem('list',JSON.stringify(local));
    reflow();
};

// 单选
function check(e, i) {
    var local = JSON.parse(localStorage.getItem('list'));
    local[i]['check'] = e.target.checked;
    localStorage.setItem('list',JSON.stringify(local));

    var lists = document.querySelectorAll('input[name=all]');
    if(e.target.checked) {
        var flag = true;
        for(var i of local) {
            if(!i['check']) {
                flag = false;
            }
        }
        if(flag) {
            for(var j of lists) {
                j['checked'] = true;
            }
        }

    }else {
        for(var i of lists) {
            i['checked'] = false;
        }
    }
    reflow();
};

function checkList() {
    var list = document.querySelectorAll('input[name=single]');
    var local = JSON.parse(localStorage.getItem('list'));

    list.forEach(function(item, index){
        list[index]['checked'] = local[index]['check'];
    })
}

