const renderQuestions = () => {

    return document.getElementById('swquiz-app').innerHTML  = `
    <style>
      .questions{
          display:grid;
          grid-template-columns: 1fr 1fr;
          justify-items: center;
          grid-gap:10%;
      }
      .questions_item{
          display:flex;
          padding:5px 20px;
          border:1px solid black;
          border-radius:20px;
          justify-self: stretch;
          justify-content: center;
          text-align:center;
      }
    </style>

    <div class="questions">
      <div id="test" class="questions_item"></div>
      <div id="test" class="questions_item"></div>
      <div id="test" class="questions_item"></div>
      <div id="test" class="questions_item"></div>
    </div>
    `;
}

export default renderQuestions;
