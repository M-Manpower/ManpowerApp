CREATE TABLE [dbo].[MagenicRegion] (
    [Id]          INT            IDENTITY (1, 1) NOT NULL,
    [Name]        NVARCHAR (MAX) NOT NULL,
    [DateCreated] DATETIME       NULL,
    [DateUpdated] DATETIME       NOT NULL,
    CONSTRAINT [PK_MagenicRegion] PRIMARY KEY CLUSTERED ([Id] ASC)
);

