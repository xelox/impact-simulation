import { writable } from "svelte/store";
import type { Artifact } from "./components/artifacts/artifactModel";

export const artifactsInventory = writable(new Array<Artifact>());