import React, { useLayoutEffect } from "react";
import { connect } from "react-redux";
import NotFound from "../containers/NotFound";
import { getVideoSrc } from "../actions";
import "../assets/styles/components/Player.scss";

const Player = (props) => {
  const { id } = props.match.params;

  const hasPlaying = Object.keys(props.playing).length > 0;

  useLayoutEffect(() => {
    props.getVideoSrc(id);
  }, []);

  return hasPlaying ? (
    <div className="Player">
      <video controls autoPlay>
        <source src={props.playing.source} type="video/mp4" />
      </video>
      <div className="Player-back">
        <button type="button" onClick={() => props.history.goBack()}>
          Regresar
        </button>
      </div>
    </div>
  ) : (
    <NotFound />
  );
};

const mapStateToProps = (state) => {
  return {
    playing: state.playing,
  };
};

const mapDispatchToProps = {
  getVideoSrc,
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
