class ReactMarkdownApp extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    content: `# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\nHeres some code, \`<div></div>\`, between 2 backticks.\n\`\`\`
    // this is multi-line code:
    
    function anotherExample(firstLine, lastLine) {
      if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
        return multiLineCode;
      }
    }
    \`\`\`\nYou can also make text **bold**... whoa!
    Or _italic_.
    Or... wait for it... **_both!_**
    And feel free to go crazy ~~crossing stuff out~~.
    
    \nThere's also [links](https://www.freecodecamp.com), and
    \n> Block Quotes!
    \nAnd if you want to get really crazy, even tables:\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | ------------- 
    \nYour content can | be here, and it | can be here....
    And here. | Okay. | I think we get it.
    
    \n- And of course there are lists.
      - Some are bulleted.
         - With different indentation levels.
            - That look like this.
    
    
    \n1. And there are numbererd lists too.
    1. Use just 1s if you want! 
    1. But the list goes on...
    - Even if you use dashes or asterisks.
    * And last but not least, let's not forget embedded images:
    
    ![React Logo w/ Text](https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png)
    `
  };

  handleChange = e => {
    this.setState({
      content: e.target.value
    });
  };

  MarkUp = () => {
    marked.setOptions({
      renderer: new marked.Renderer(),
      gfm: true,
      tables: true,
      breaks: true,
      pedantic: false,
      sanitize: true,
      smartLists: true,
      smartypants: false
      // ,
      // highlight: function(code) {
      //   return hljs.highlightAuto(code).value;
      // }
    });

    return {
      __html: marked(this.state.content)
    };
  };
  render() {
    return (
      <div id="Main">
        <div className="Editor">
          <div className="title">
            <p>Editor</p>
          </div>
          <textarea
            name=""
            id="editor"
            cols="30"
            rows="10"
            defaultValue={this.state.content}
            onChange={this.handleChange}
          />
        </div>

        <div className="Preview">
          <div className="title">
            <p>Preview</p>
          </div>
          <div id="preview" dangerouslySetInnerHTML={this.MarkUp()} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<ReactMarkdownApp />, document.getElementById("root"));
