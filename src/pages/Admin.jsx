import React, { useEffect, useRef, useState } from "react";
import AppTheme from "../theme/AppTheme";
import CssBaseline from "@mui/material/CssBaseline";
import AppAppBar from "../components/AppAppBar";
import Container from "@mui/material/Container";
import Hero from "../components/HeroAdmin";

// const Card = styled(MuiCard)(({ theme }) => ({
//   display: "flex",
//   flexDirection: "column",
//   alignSelf: "center",
//   width: "100%",
//   padding: theme.spacing(4),
//   gap: theme.spacing(2),
//   margin: "auto",
//   [theme.breakpoints.up("sm")]: {
//     maxWidth: "450px",
//   },
//   boxShadow:
//     "hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px",
//   ...theme.applyStyles("dark", {
//     boxShadow:
//       "hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px",
//   }),
// }));

// const SignInContainer = styled(Stack)(({ theme }) => ({
//   height: "calc((1 - var(--template-frame-height, 0)) * 100dvh)",
//   minHeight: "100%",
//   padding: theme.spacing(2),
//   [theme.breakpoints.up("sm")]: {
//     padding: theme.spacing(4),
//   },
//   "&::before": {
//     content: '""',
//     display: "block",
//     position: "absolute",
//     zIndex: -1,
//     inset: 0,
//     backgroundImage:
//       "radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))",
//     backgroundRepeat: "no-repeat",
//     ...theme.applyStyles("dark", {
//       backgroundImage:
//         "radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))",
//     }),
//   },
// }));

export default function Admin(props) {
  const [orders, setOrders] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);
  // const [password, setPassword] = useState("");
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  // const [unauthorized, setUnauthorized] = useState(false);

  // const server =
  //   import.meta.env.VITE_CHECKOUT_SERVER || "http://localhost:4242";

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

  // // Blocking refresh: try immediately and retry with exponential backoff, waiting until done or exhausted
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
  //     // fetchOrders();
  //   } catch (err) {
  //     setError(err.message);
  //   }
  // };

  // const logout = async () => {
  //   try {
  //     await fetch(server + "/admin/logout", {
  //       method: "POST",
  //       credentials: "include",
  //     });
  //   } catch (e) {}
  //   clearRefreshTimer();
  //   setIsAuthenticated(false);
  //   setOrders([]);
  //   setUnauthorized(false);
  // };

  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <AppAppBar />
      <Hero />
      <div>
        <h1>Admin — Orders</h1>
        {/* {!isAuthenticated && (
          <div style={{ marginBottom: 12 }}>
            <p>This area is protected. Enter the admin password to continue.</p>
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
        )} */}

        {/* {isAuthenticated && (
          <div style={{ marginBottom: 12 }}>
            <button onClick={logout}>Logout</button>
          </div>
        )} */}

        {/* {loading && <p>Loading…</p>} */}
        {/* {unauthorized && (
          <p style={{ color: "orange" }}>
            Unauthorized — password incorrect. Please try again.
          </p>
        )} */}
        {/* {error && <p style={{ color: "red" }}>Error: {error}</p>}

        {!loading && !error && isAuthenticated && ( */}
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
        {/* )} */}
      </div>
    </AppTheme>
  );
}
