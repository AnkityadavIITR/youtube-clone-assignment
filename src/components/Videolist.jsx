import React, { useEffect, useRef, useState } from "react";
import Grid from "@mui/material/Grid";
import styled from "styled-components";
import Description from "../components/Description";
import Pagination from "./Pagination";
import ClearIcon from '@mui/icons-material/Clear';
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const Videolist = ({ videoData, setVideoData }) => {
  const [param, setParam] = useState();
  const [video, setVideo] = useState({});
  const [isPlaying, setIsPlaying] = useState(true);
  const [slide, setSlide] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://internship-service.onrender.com/videos?page=${slide}`
        );
        const data = await response.json();
        setVideoData(data);
        console.log(data);
        console.log(data.message);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [slide,setVideoData]);

  useEffect(() => {
    console.log(param, "PARAM");
    
    //to find video
    const video = videoData?.data?.posts?.filter(
      (element) => element.postId === param
    );
    console.log(video?.[0]);
    setVideo(video?.[0]);
  }, [param ,videoData]);
  

  //to play and pause the video of card
  const handleCardClick = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };
  
  //to bring back to the main thumbnail
  function onClickBack() {
    videoRef.current.pause();
    setParam();
  }

  return (
    <>
      {video ? (
        <VideoCardWrapper>
          <Videocard >
            <Control>
              <button onClick={onClickBack}><ClearIcon style={{ color: 'white' }}/></button>
              <div style={{ color: 'white' }}>

             {
               isPlaying ?(<PauseIcon />):(<PlayArrowIcon />)
              }
              </div>
            </Control>
            <video
              src={video?.submission?.mediaUrl}
              ref={videoRef}
              onClick={handleCardClick}
              autoPlay 
              
            />
            <Info>
              <Description text={video?.submission?.description} />
              <PersonDetail>
                <img src={video?.creator?.pic} alt="" />
                <p>{video?.creator?.name}</p>
              </PersonDetail>
            </Info>
          </Videocard>
        </VideoCardWrapper>

      ) : (
        <Gridbox>
          <Pagination
            slide={slide}
            setSlide={setSlide}
          />

          <Grid container mb={2}>
            <Grid item xs={2} sm={1.5} lg={1.5} />
            <Grid item xs={10} sm={9} lg={9}>
              <Grid container alignSelf="center">
                {videoData && videoData.data && videoData.data.posts ? (
                  videoData.data.posts.map((item) => {
                    return (
                      <Grid
                        item
                        lg={2.4}
                        md={3}
                        sm={4}
                        xs={12}
                        rowGap={10}
                        pt={2}
                        pb={2}
                        
                      >
                        <Card onClick={() => setParam(item?.postId)}>
                          <Image
                            src={item.submission.thumbnail}
                            alt=""
                            key={item.postId}
                          />
                        </Card>
                        <Title>
                          <p>{item.submission.title}</p>
                        </Title>
                      </Grid>
                    );
                  })
                ) : (
                  <p>loading....</p>
                )}
              </Grid>
            </Grid>
            <Grid item xs={0} sm={1.5} />
          </Grid>
        </Gridbox>
      )}
    </>
  );
};

const Gridbox = styled.div`
  background-color: #f9f9f9;
  overflow-x: hidden;
  
`;
const Card = styled.div`
  cursor: pointer;
`;

const Title = styled.div`
  padding: 5px 30px 5px 0px;
  p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
  }
`;
const Image = styled.img`
  border-radius: 20px;
  max-width: 70%;
  box-shadow: #32325d3f 0px 30px 60px -12px inset,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;

  @media(max-width: 400px){
    width: 95%;
  }  
`;

const Control=styled.div`
 display: flex;
 align-items: center;
 justify-content: space-between;
 padding-left: 15px;
 padding-right: 15px;
 position: relative;
 top: 40px;
 button {
    background: transparent;
    border: none;
    cursor: pointer;
    z-index: 10;

  }
`

const VideoCardWrapper = styled.div`
  padding: 40px 0px;
  background-color: #f9f9f9;

`;

const Videocard = styled.div`
  position: relative;
  width: fit-content;
  margin: auto;

  video {
    width: 320px;
    border-radius: 20px;
  }

  @media (max-width: 450px) {
    video {
      width: 95%;
      height: 1205;
      padding-left: 2.5%;
    }
  }
`;

const Info = styled.div`
  display:flex;
  flex-direction:column;
  gap:40px;
  position: relative;
  bottom: 60px;
  z-index: 10;


`;

const PersonDetail = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding-top: 5px;
  padding-left: 10px;

  img {
    width: 40px;
    height: 40px;
    border-radius: 40px;
  }
  p{
    color: white;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
  }
`;

export default Videolist;
