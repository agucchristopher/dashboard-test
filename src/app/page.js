"use client";

import React from "react";
import Aos from "aos";
import Image from "next/image";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Header from "../components/Header";
import axios from "axios";
import { Button, Card, Col, Grid, Loading, Row, Text } from "@nextui-org/react";
import { NextUIProvider, Table, styled, Modal } from "@nextui-org/react";

const App = () => {
  return (
    <div>
      <Header />
    </div>
  );
};

export default App;
