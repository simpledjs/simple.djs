import { container, PieceContext } from "@sapphire/framework";
import { Variable, VariableOptions } from "../lib/structures/Variable";

export class GetGlobalUserVarVariable extends Variable {
	public constructor(context: PieceContext, options: VariableOptions) {
		super(context, {
			...options,
			name: "getglobaluservar",
			enabled: container.client.options.databasesEnabled,
			definition: (name: string, user: string) =>
				(this.container.stores.get("databases").get("globaluservars").get(user) ?? {})[name]
		});
	}
}
