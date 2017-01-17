CREATE TABLE [dbo].[RolePermission] (
    [RoleId]       INT NOT NULL,
    [PermissionId] INT NOT NULL,
    CONSTRAINT [FK_RolePermission_Permission] FOREIGN KEY ([PermissionId]) REFERENCES [dbo].[Permission] ([Id]),
    CONSTRAINT [FK_RolePermission_Role] FOREIGN KEY ([RoleId]) REFERENCES [dbo].[Role] ([Id])
);




GO
CREATE UNIQUE CLUSTERED INDEX [ClusteredIndex-20170117-175557]
    ON [dbo].[RolePermission]([RoleId] ASC, [PermissionId] ASC);

