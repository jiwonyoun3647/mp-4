"use client";

import { ExhibitionProps } from "@/types";
import { Box, Card, CardContent } from "@mui/material";

export default function ExhibitionDisplay({ exhibitions }: { exhibitions: ExhibitionProps[] | null }) {
    if (exhibitions === null) {
        return(
            <Box sx={{ padding: 4 }}>
                <h2>Something went wrong</h2>
            </Box>
            );
    }

    return (
        <Box sx={{ padding: 4 }}>
            <h1 style={{
               fontFamily: "Arial, Helvetica, sns-serif",
               fontWeight: "bold"
            }}>
                Search Result
            </h1>

            {exhibitions.map((exhibition: ExhibitionProps) => (
                <Card key={exhibition.id} sx={{ marginBottom: 2 }}>
                    <CardContent>
                        <h3 style={{
                            color: "darkred",
                            fontFamily: 'Helvetica, sans-serif',
                            fontWeight: 'bold'
                        }}>
                            {exhibition.title}
                        </h3>
                        <p style={{
                            color: "navy",
                            fontFamily: 'Helvetica, sans-serif'
                        }}>
                            Exhibition Dates: {exhibition.begindate} ~ {exhibition.enddate}
                        </p>
                    </CardContent>
                </Card>
            ))}

            {exhibitions.length === 0 && (<p style={{ color: "darkred",
                fontFamily: 'Helvetica, sans-serif',
                fontWeight: 'bold' }}>No results</p>)}
        </Box>
    )
}