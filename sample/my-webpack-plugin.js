class MyWebpackPlugin {
  apply(compiler) {
    compiler.hooks.done.tap("My Plugin", stats => {
      console.log("MyPlugin: done")
    })

    // compiler.plugin() 함수로 후처리한다
    compiler.plugin("emit", (compilation, callback) => {
      const source = compilation.assets["main.js"].source()
      console.log(source)
      callback()
    })
  }
}

module.exports = MyWebpackPlugin