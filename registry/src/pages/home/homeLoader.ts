import type { PackageDetails } from "../../api/types/packageDetails";
import { getFeaturedPackages } from "../../api/queries/getFeaturedPackages";

export interface HomerLoaderResult {
    featuredPackages: PackageDetails[]
}

export async function homeLoader(): Promise<HomerLoaderResult> {
    const featuredPackages = await getFeaturedPackages()

    return {
        featuredPackages
    }
}