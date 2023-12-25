for (var i = 0; i < 10000000; i++) {
  ;((i) => {
    var site = {}
    site.name = 'koala'
    site.domain = '程序员成长指北'
    // 这里是一个保存或更新等操作

    setTimeout(() => {
      console.log(i, site)
    }, 0)
  })(i)
}
