"use client";
import { Box, TextField, Button } from "@mui/material";

export default function Home() {
    return(
        <Box sx={{ padding: 4, textAlign: 'center' }}>
            <h1 style={{
                fontFamily: 'Helvetica, sans-serif',
                fontWeight: 'bold'
            }}>
                Harvard Museum Exhibition Search
            </h1>

            <form action="/exhibitions">
                <TextField
                    required
                    name="keyword"
                    placeholder="Search exhibitions by keyword!"
                    size="small"
                    sx={{ marginRight: 2, width: '400px'}}
                />
                <Button type="submit" variant="contained" size="large">Search</Button>
            </form>
        </Box>
    );
}