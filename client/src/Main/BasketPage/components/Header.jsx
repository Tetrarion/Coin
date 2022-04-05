import React, { useState, useEffect } from 'react';

export function Header({
  sort, screenWidth, names, namesForLargeScreeen, ASCImage, DESCImage,
}) {
  const [width, setWidth] = useState(0);
  const [prevElement, setPrevElement] = useState('');

  const lgWidth = 100 / names.length;

  const lgStyle = {
    width: `${lgWidth}%`,
  };

  const style = {
    width: `${width}%`,
  };

  useEffect(() => {
    if (screenWidth < 960) setWidth(100 / (names.length - namesForLargeScreeen.length));
    else setWidth(100 / names.length);
  }, [screenWidth, namesForLargeScreeen.length, names.length]);

  const showImage = (element) => {
    sort(element.id);
    if (element !== prevElement && prevElement) prevElement.lastChild.classList.add('top__list-item-img--hidden');
    setPrevElement(element);
    if (element.lastChild.classList.contains('top__list-item-img--hidden')) {
      element.lastChild.classList.remove('top__list-item-img--hidden');
    }
    if (element.id === `${element.getAttribute('name')} up`) {
      element.setAttribute('id', `${element.getAttribute('name')} down`);
      element.lastChild.setAttribute('src', ASCImage);
    } else {
      element.setAttribute('id', `${element.getAttribute('name')} up`);
      element.lastChild.setAttribute('src', DESCImage);
    }
  };

  if (!sort) {
    if (namesForLargeScreeen) {
      return (
        <div className="top">
          <ul className="top__list">
            {
                            names.map((name) => {
                              if (namesForLargeScreeen.includes(name)) {
                                return (
                                  <div className="top__list-item-lg" key={name} style={lgStyle}>
                                    {name}
                                  </div>
                                );
                              } return (
                                <div className="top__list-item" key={name} style={style}>
                                  {name}
                                </div>
                              );
                            })
                        }
          </ul>
        </div>
      );
    } return (
      <div className="top">
        <ul className="top__list">
          {
                            names.map((name) => (
                              <div className="top__list-item" key={name} style={style}>
                                {name}
                              </div>
                            ))
                        }
        </ul>
      </div>
    );
  }
  if (namesForLargeScreeen) {
    return (
      <div
        className="top"
        onClick={(event) => showImage(event.target)}
        onKeyDown={(event) => showImage(event.target)}
        role="button"
        tabIndex={0}
      >
        <ul className="top__list">
          {
                                names.map((name) => {
                                  if (namesForLargeScreeen.includes(name)) {
                                    return (
                                      <div className="top__list-item-lg" name={name} id={name} key={name} style={lgStyle}>
                                        {name}
                                        {' '}
                                        <img className="top__list-item-img top__list-item-img--hidden" alt="item-img" />
                                      </div>
                                    );
                                  } return (
                                    <div className="top__list-item" name={name} id={name} key={name} style={style}>
                                      {name}
                                      {' '}
                                      <img className="top__list-item-img top__list-item-img--hidden" alt="item-img" />
                                    </div>
                                  );
                                })
                            }
        </ul>
      </div>
    );
  } return (
    <div
      className="top"
      onClick={(event) => showImage(event.target)}
      onKeyDown={(event) => sort(event.target.text)}
      role="button"
      tabIndex={0}
    >
      <ul className="top__list">
        {
                                names.map((name) => (
                                  <div className="top__list-item" name={name} id={name} key={name} style={style}>
                                    {name}
                                    {' '}
                                    <img className="top__list-item-img top__list-item-img--hidden" alt="item-img" />
                                  </div>
                                ))
                                }
      </ul>
    </div>
  );
}
