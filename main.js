import { Timeline } from "@knight-lab/timelinejs";
import "@knight-lab/timelinejs/dist/css/timeline.css";

const gsheetId = "2PACX-1vSVkQ1Cpo4gcIwWGFlWg1oYkNizkVuECcO7q9BaKuhA_eLyH6Z_oHkVKet6udyddf6OQg3X_tiLUGj2";
const url = `https://docs.google.com/spreadsheets/d/e/${gsheetId}/pubhtml`;

const _timeline = new Timeline("timeline-embed", url);
