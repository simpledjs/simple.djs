import { container } from "@sapphire/framework";
import { Environment } from "@discordextend/interpreter";

declare module "@sapphire/pieces" {
	export interface Container {
		environment: Environment;
	}
}

container.environment = new Environment();
