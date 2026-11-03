import { ExhibitionProps} from "@/types";

export default async function getExhibition(keywordUser: string): Promise<ExhibitionProps[] | null> {
    const MUSEUM_API_KEY = process.env.MUSEUM_API_KEY;

    let base = `https://api.harvardartmuseums.org/exhibition?apikey=${MUSEUM_API_KEY}&size=30`;

    if (keywordUser) {
        base += `&keyword=${keywordUser}`;
    }

    try {
        const resp = await fetch(base, {cache: "no-store"});
        const data = await resp.json();

        return data.records;

    } catch (e) {
        console.error("Error Occurred:", e);
        return null;
    }
}