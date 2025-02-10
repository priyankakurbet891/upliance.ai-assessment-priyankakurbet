import React, { useState } from "react";
import { Button, Box, Typography } from "@mui/material";
import { useSpring, animated } from "react-spring";

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  const backgroundSpring = useSpring({
    backgroundColor: `rgba(0, 150, 255, ${count * 0.1})`,
    config: { tension: 200, friction: 20 },
  });

  return (
    <animated.div
      style={{ ...backgroundSpring, padding: "20px", borderRadius: "10px" }}
    >
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography variant="h4">{count}</Typography>
        <Typography variant="subtitle1">Counter</Typography>
        <Box display="flex" gap={2} marginTop={2}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setCount(count + 1)}
          >
            +
          </Button>
          <Button variant="contained" onClick={() => setCount(0)}>
            Reset
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => setCount(count - 1)}
          >
            -
          </Button>
        </Box>
      </Box>
    </animated.div>
  );
};

export default Counter;
