import React from 'react';
import { createRoot } from 'react-dom/client';
import 'antd/dist/reset.css';
import './index.css';
import Home from './cacluator/Home';

const root = createRoot(document.getElementById("root"));
root.render(<Home />);