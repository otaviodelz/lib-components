import React, { useState } from "react";
import { Button, Chip } from "@naturacosmeticos/natds-web";

const Counter = () => {
  const [increment, setIncrement] = useState(0);

  return (
    <div>
      <Button onClick={() => setIncrement((prev) => prev++)}>Click</Button>
      <Chip>{increment}</Chip>
    </div>
  );
};

export default Counter;
