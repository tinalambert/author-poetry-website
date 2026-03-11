// import * as React from "react";
import React, { useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Divider from "@mui/material/Divider";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import MuiCard from "@mui/material/Card";
import { styled } from "@mui/material/styles";
import ForgotPassword from "../components/ForgotPassword";
import AppTheme from "../theme/AppTheme";
import AppAppBar from "../components/AppAppBar";
import ColorModeSelect from "../theme/ColorModeSelect";
import myLogo from "../images/TL_Amber_Logo_sm.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Card = styled(MuiCard)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignSelf: "center",
  width: "100%",
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: "auto",
  [theme.breakpoints.up("sm")]: {
    maxWidth: "450px",
  },
  boxShadow:
    "hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px",
  ...theme.applyStyles("dark", {
    boxShadow:
      "hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px",
  }),
}));

const SignInContainer = styled(Stack)(({ theme }) => ({
  height: "calc((1 - var(--template-frame-height, 0)) * 100dvh)",
  minHeight: "100%",
  padding: theme.spacing(2),
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(4),
  },
  "&::before": {
    content: '""',
    display: "block",
    position: "absolute",
    zIndex: -1,
    inset: 0,
    backgroundImage:
      "radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))",
    backgroundRepeat: "no-repeat",
    ...theme.applyStyles("dark", {
      backgroundImage:
        "radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))",
    }),
  },
}));

export default function SignIn(props) {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [unauthorized, setUnauthorized] = useState(false);

  // const [email, setEmail] = useState(null);
  // const [password, setPassword] = useState("");
  // const navigate = useNavigate();

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   setError(null);
  //   axios
  //     .post("http://localhost:3388/api/login", {
  //       email,
  //       password,
  //     })
  //     .then((response) => {
  //       console.log(response.data);
  //       if (response.data.success) {
  //         setIsAuthenticated(true);
  //         navigate("/");
  //       }
  //     });

  const server =
    import.meta.env.VITE_CHECKOUT_SERVER || "http://localhost:3388";

  // const refreshTimerRef = useRef(null);
  // const refreshAttemptsRef = useRef(0);
  // const MAX_REFRESH_RETRIES = 5;
  // const REFRESH_BASE_MS = 1000;

  // const clearRefreshTimer = () => {
  //   if (refreshTimerRef.current) {
  //     clearTimeout(refreshTimerRef.current);
  //     refreshTimerRef.current = null;
  //   }
  //   refreshAttemptsRef.current = 0;
  // };

  // const scheduleRefresh = (expiresInSeconds) => {
  //   clearRefreshTimer();
  //   const when = Math.max((expiresInSeconds - 30) * 1000, 10000);
  //   refreshTimerRef.current = setTimeout(() => {
  //     doRefresh();
  //   }, when);
  // };

  // const waitMs = (ms) => new Promise((res) => setTimeout(res, ms));

  // Blocking refresh: try immediately and retry with exponential backoff, waiting until done or exhausted
  // const refreshWithRetries = async () => {
  //   clearRefreshTimer();
  //   for (let attempt = 1; attempt <= MAX_REFRESH_RETRIES; attempt++) {
  //     try {
  //       const res = await fetch(server + "/admin/refresh", {
  //         method: "POST",
  //         credentials: "include",
  //       });
  //       if (res.ok) {
  //         const data = await res.json().catch(() => ({}));
  //         if (data && data.expires_in) scheduleRefresh(data.expires_in);
  //         refreshAttemptsRef.current = 0;
  //         setIsAuthenticated(true);
  //         setUnauthorized(false);
  //         return true;
  //       }
  //     } catch (e) {
  //       // ignore and retry
  //     }
  //     const delay = REFRESH_BASE_MS * Math.pow(2, attempt - 1);
  //     await waitMs(delay);
  //   }
  //   setIsAuthenticated(false);
  //   return false;
  // };

  // const doRefresh = async () => {
  //   try {
  //     const res = await fetch(server + "/admin/refresh", {
  //       method: "POST",
  //       credentials: "include",
  //     });
  //     if (!res.ok) {
  //       // schedule retry with backoff
  //       refreshAttemptsRef.current = Math.min(
  //         refreshAttemptsRef.current + 1,
  //         MAX_REFRESH_RETRIES,
  //       );
  //       const attempt = refreshAttemptsRef.current;
  //       if (attempt <= MAX_REFRESH_RETRIES) {
  //         const delay = REFRESH_BASE_MS * Math.pow(2, attempt - 1);
  //         clearRefreshTimer();
  //         refreshTimerRef.current = setTimeout(() => {
  //           doRefresh();
  //         }, delay);
  //       } else {
  //         setIsAuthenticated(false);
  //       }
  //       return false;
  //     }
  //     const data = await res.json().catch(() => ({}));
  //     if (data && data.expires_in) scheduleRefresh(data.expires_in);
  //     // reset attempts on success
  //     refreshAttemptsRef.current = 0;
  //     setIsAuthenticated(true);
  //     setUnauthorized(false);
  //     return true;
  //   } catch (e) {
  //     // network error: schedule retry
  //     refreshAttemptsRef.current = Math.min(
  //       refreshAttemptsRef.current + 1,
  //       MAX_REFRESH_RETRIES,
  //     );
  //     const attempt = refreshAttemptsRef.current;
  //     if (attempt <= MAX_REFRESH_RETRIES) {
  //       const delay = REFRESH_BASE_MS * Math.pow(2, attempt - 1);
  //       clearRefreshTimer();
  //       refreshTimerRef.current = setTimeout(() => {
  //         doRefresh();
  //       }, delay);
  //     } else {
  //       setIsAuthenticated(false);
  //     }
  //     return false;
  //   }
  // };

  // const fetchOrders = async () => {
  //   setLoading(true);
  //   setError(null);
  //   setUnauthorized(false);
  //   try {
  //     // Use credentials to include HttpOnly cookie set by the server. Also support legacy VITE_ADMIN_KEY for dev.
  //     const legacy = import.meta.env.VITE_ADMIN_KEY;
  //     const headers = legacy ? { "x-admin-key": legacy } : {};
  //     let res = await fetch(server + "/orders", {
  //       headers,
  //       credentials: "include",
  //     });
  //     if (res.status === 401) {
  //       const refreshed = await doRefresh();
  //       if (refreshed) {
  //         res = await fetch(server + "/orders", {
  //           headers,
  //           credentials: "include",
  //         });
  //       } else {
  //         setUnauthorized(true);
  //         setOrders([]);
  //         return;
  //       }
  //     }
  //     if (!res.ok) throw new Error("Failed to fetch orders: " + res.status);
  //     const data = await res.json();
  //     setOrders(data || []);
  //   } catch (err) {
  //     setError(err.message);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   // Try to fetch orders on mount (browser will include cookie if present)
  //   fetchOrders();
  //   return () => clearRefreshTimer();
  // }, []);

  // const submitPassword = async () => {
  //   const key = password.trim();
  //   if (!key) return setError("Please enter a password");
  //   setError(null);
  //   try {
  //     // Use credentials: include so the server can set an HttpOnly cookie
  //     const res = await fetch(server + "/admin/login", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ password: key }),
  //       credentials: "include",
  //     });
  //     if (!res.ok) {
  //       const err = await res.json().catch(() => ({ error: "Login failed" }));
  //       return setError(err.error || "Login failed");
  //     }
  //     const data = await res.json().catch(() => ({}));
  //     if (data && data.expires_in) scheduleRefresh(data.expires_in);
  //     // login succeeded and cookie should be set; mark authenticated and fetch orders
  //     setIsAuthenticated(true);
  //     setPassword("");
  //     fetchOrders();
  //   } catch (err) {
  //     setError(err.message);
  //   }
  //   let isValid = true;
  //   if (!password.valueOf || password.valueOf.length < 6) {
  //     setPasswordError(true);
  //     setPasswordErrorMessage("Password must be at least 6 characters long.");
  //     isValid = false;
  //   } else {
  //     setPasswordError(false);
  //     setPasswordErrorMessage("");
  //   }
  // };

  // Below is from MUI template with some edits for validation and forgot password dialog
  const [emailError, setEmailError] = React.useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = React.useState("");
  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event) => {
    if (emailError || passwordError) {
      event.preventDefault();
      return;
    }
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });

    return isValid;
  };

  const validateInputs = () => {
    const email = document.getElementById("email");
    const password = document.getElementById("password");

    let isValid = true;

    // if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
    //   setEmailError(true);
    //   setEmailErrorMessage("Please enter a valid email address.");
    //   isValid = false;
    // } else {
    //   setEmailError(false);
    //   setEmailErrorMessage("");
    // }

    if (!password.value || password.value.length < 6) {
      setPasswordError(true);
      setPasswordErrorMessage("Password must be at least 6 characters long.");
      isValid = false;
    } else {
      setPasswordError(false);
      setPasswordErrorMessage("");
    }

    return isValid;
  };

  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <AppAppBar />
      <SignInContainer direction="column" justifyContent="space-between">
        <ColorModeSelect
          sx={{ position: "fixed", top: "1rem", right: "1rem" }}
        />
        <Card variant="outlined">
          <img
            src={myLogo}
            alt="TL Amber Logo"
            style={{ width: 48, height: 48, margin: "0 auto" }}
          />
          <Typography
            component="h1"
            variant="h4"
            sx={{
              width: "100%",
              fontSize: "clamp(2rem, 10vw, 2.15rem)",
              textAlign: "center",
            }}
          >
            Admin Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              gap: 2,
            }}
          >
            <FormControl>
              <FormLabel htmlFor="email">Email</FormLabel>
              <TextField
                error={emailError}
                helperText={emailErrorMessage}
                id="email"
                type="email"
                name="email"
                placeholder="your@email.com"
                autoComplete="email"
                autoFocus
                required
                fullWidth
                variant="outlined"
                color={emailError ? "error" : "primary"}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password">Password</FormLabel>
              <TextField
                error={passwordError}
                helperText={passwordErrorMessage}
                name="password"
                placeholder="••••••"
                type="password"
                id="password"
                autoComplete="current-password"
                autoFocus
                required
                fullWidth
                variant="outlined"
                color={passwordError ? "error" : "primary"}
              />
            </FormControl>

            {/* Below is from Admin page */}
            {/* {!isAuthenticated && (
              <div style={{ marginBottom: 12 }}>
                <p>
                  This area is protected. Enter the admin password to continue.
                </p>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Admin password"
                  style={{ padding: 8, marginRight: 8 }}
                />
                <button onClick={submitPassword} className="button">
                  Unlock
                </button>
              </div>
            )}

            {isAuthenticated && (
              <div style={{ marginBottom: 12 }}>
                <button onClick={logout}>Logout</button>
              </div>
            )}

            {loading && <p>Loading…</p>}
            {unauthorized && (
              <p style={{ color: "orange" }}>
                Unauthorized — password incorrect. Please try again.
              </p>
            )}
            {error && <p style={{ color: "red" }}>Error: {error}</p>}

            {!loading && !error && isAuthenticated && (
              <div>
                <p>Found {orders.length} order(s).</p>
                <ul>
                  {orders.map((o) => (
                    <li
                      key={o.id}
                      style={{ padding: 8, borderBottom: "1px solid #eee" }}
                    >
                      <div>
                        <strong>{o.id}</strong> — {o.currency}{" "}
                        {(o.amount_total / 100).toFixed(2)}
                      </div>
                      {o.customer_email && <div>Email: {o.customer_email}</div>}
                      <details style={{ marginTop: 6 }}>
                        <summary>Line items</summary>
                        <ul>
                          {(o.line_items || []).map((li, idx) => (
                            <li key={idx}>
                              {li.description} — {li.quantity} × $
                              {(li.amount_subtotal / 100).toFixed(2)}
                            </li>
                          ))}
                        </ul>
                      </details>
                    </li>
                  ))}
                </ul>
              </div>
            )} */}
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <ForgotPassword open={open} handleClose={handleClose} />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              // onClick={validateInputs}
              onClick={submitPassword}
            >
              Sign in
            </Button>
            <Link
              component="button"
              type="button"
              onClick={handleClickOpen}
              variant="body2"
              sx={{ alignSelf: "center" }}
            >
              Forgot your password?
            </Link>
          </Box>
          {/* <Divider>or</Divider>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Button
              fullWidth
              variant="outlined"
              onClick={() => alert("Sign in with Google")}
              startIcon={<GoogleIcon />}
            >
              Sign in with Google
            </Button>
            <Button
              fullWidth
              variant="outlined"
              onClick={() => alert("Sign in with Facebook")}
              startIcon={<FacebookIcon />}
            >
              Sign in with Facebook
            </Button>
            <Typography sx={{ textAlign: "center" }}>
              Don&apos;t have an account?{" "}
              <Link
                href="/material-ui/getting-started/templates/sign-in/"
                variant="body2"
                sx={{ alignSelf: "center" }}
              >
                Sign up
              </Link>
            </Typography> */}
          {/* </Box> */}
        </Card>
      </SignInContainer>
    </AppTheme>
  );
}
// }
