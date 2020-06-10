# polyglot-boilerplate

Boilerplate for polyglot kubernetes environment with api communication. Use with microk8s with docker registry on port 5000.

    Currently Supporting:
        Go
        Python
        Nodejs

    Create Sandbox Namespace:
        make create

    Build Images:
        make build-all

    Push Images:
        make push-all

    Deploy:
        make apply

    Delete:
        make delete