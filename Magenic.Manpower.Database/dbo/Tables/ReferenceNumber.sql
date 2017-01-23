CREATE TABLE [dbo].[ReferenceNumber] (
    [Id]                INT           IDENTITY (1, 1) NOT NULL,
    [ReferenceString]   NVARCHAR (50) NOT NULL,
    [ManpowerRequestId] INT           NOT NULL,
    [StatusID]          INT           NOT NULL,
    [DateCreated]       DATETIME      NOT NULL,
    [DateUpdated]       DATETIME      NULL,
    CONSTRAINT [PK_ReferenceNumber] PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [FK_ReferenceNumber_ManpowerRequest] FOREIGN KEY ([ManpowerRequestId]) REFERENCES [dbo].[ManpowerRequest] ([Id]),
    CONSTRAINT [FK_ReferenceNumber_Status] FOREIGN KEY ([StatusID]) REFERENCES [dbo].[Status] ([Id])
);










GO
CREATE UNIQUE NONCLUSTERED INDEX [NonClusteredIndex-20170119-180342]
    ON [dbo].[ReferenceNumber]([ReferenceString] ASC);

