import React from 'react';


const SearchVideoForm = (props) => {
  const {
    searchKeyword,
    searchVideo,
    changeKeyword,
  } = props;

  return (
    <div className="p-searchModal__inputArea">
      <form
        action="get"
        href="/"
        onSubmit={
          (e) => {
            e.preventDefault();
            searchVideo();
          }
        }
      >
        <input
          type="text"
          className="p-searchModal__input"
          maxLength={20}
          placeholder="動画を検索"
          value={searchKeyword}
          onChange={
            (e) => {
              changeKeyword(e.target.value);
            }
          }
        />
        <button
          className="c-btn-primary u-space-t-M"
          href="#"
          onSubmit={
            (e) => {
              e.preventDefault();
              searchVideo();
            }
          }
        >検索</button>
      </form>
    </div>
  );
};

export default SearchVideoForm;
